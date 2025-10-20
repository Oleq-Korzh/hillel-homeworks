// Оптимізація, конкатинація, мініфікація JS
// если под этим имелось ввиду удалить неиспользуемый код, клеить в один файл импорты, сжать, сделать чанки
// то вроде бы это входит уже в сам вебпак если мы напишем mode production

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ESLintWebpackPlugin from "eslint-webpack-plugin";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __jsPagesDir = path.resolve(__dirname, "src/js/pages");

// Тут я решил сделать динамичный html/js, чтобы вручную не задавать каждую страницу, ибо их может быть очень много

const jsFiles = fs.readdirSync(__jsPagesDir);
// фильтруем сразу ибо я сначала допустил ошибку, что map все равно будет вставлять ячейки, даже если не вернуть ничего
const htmlFiles = fs
  .readdirSync(__dirname)
  .filter((file) => file.endsWith(".html"));

const jsPagesObj = jsFiles.reduce((obj, fileName) => {
  if (fileName.endsWith(".js")) {
    const nameWithoutJs = path.basename(fileName, ".js");

    obj[nameWithoutJs] = path.resolve(__dirname, `src/js/pages/${fileName}`);

    return obj;
  }
}, {});

const htmlArraysPluginObjects = htmlFiles.map((file) => {
  const nameWithoutPostfix = path.basename(file, ".html");

  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, file),
    filename: file,
    chunks: [nameWithoutPostfix],
  });
});

// process глоб переменная, мы ее рантаймим при запуске scripts в package.json, другого способа не нашел, мне нужно было разделить минимайзер чтобы при development мы могли дебажить и видеть код
const isProd = process.env.NODE_ENV === "production";

export default {
  mode: isProd ? "production" : "development",
  resolve: {
    // extensions: [".js", ".json"], // хотел сделать, чтобы расширения подставлялись, но это работает только для commonJS
    alias: {
      "@helpers": path.resolve(__dirname, "src/js/helpers"),
      "@scss": path.resolve(__dirname, "src/scss"),
      "@css": path.resolve(__dirname, "src/css"),
      "@images": path.resolve(__dirname, "src/images"),
      "@fonts": path.resolve(__dirname, "src/fonts"),
    },
  },
  entry: jsPagesObj,
  devtool: isProd ? false : "source-map", // карты для прода не нужны + лишний груз в папках
  output: {
    filename: "scripts/[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // у меня только одна папка для билда, поэтому cleanplugin нет смысла юзать (возможно)
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: isProd,
    minimizer: isProd
      ? [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
              },
            },
          }),
          new CssMinimizerPlugin(),
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                plugins: [
                  ["gifsicle", { interlaced: true }],
                  ["jpegtran", { progressive: true }],
                  ["optipng", { optimizationLevel: 5 }],
                  [
                    "svgo",
                    {
                      plugins: [
                        {
                          name: "preset-default",
                          params: {
                            overrides: {
                              removeViewBox: false,
                              addAttributesToSVGElement: {
                                params: {
                                  attributes: [
                                    { xmlns: "http://www.w3.org/2000/svg" },
                                  ],
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  ],
                ],
              },
            },
          }),
        ]
      : [], // хотел чеерез && сделать, но тут обязательно должен быть массив, даже если пустой
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
          },
        },
      },
      // конечно мне бы хотелось работать чисто с лоадером, чтобы файлы просто билдились, но для devServer нужен style-loader, как я понял, обязательно если хочется обновление страницы
      {
        test: /\.css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
    // добавил ради практики, но если честно, я не сильно вижу смысл в данном плагине на реальных проектах (как мне показалось, не уверен)
    ...htmlArraysPluginObjects,
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/images/static"),
          to: path.resolve(__dirname, "dist/images/static"),
        },
      ],
    }),
    new ESLintWebpackPlugin({
      extensions: ["js"],
      fix: true,
      exclude: ["node_modules", "dist"],
    }),
  ],
  target: "web",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    headers: {
      "Cache-Control": "no-cache",
    },
    port: 3000,
  },
};
