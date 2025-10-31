// Первую функцию я сделал сам (название и десктуктуризацию и попросил дальше GPT снегерить шаблоны с CSS)

// helpers (минимум "защиты" и чуть-чуть удобства)
const fmt = (v) => (v ? String(v) : "unknown");
const count = (a) => (Array.isArray(a) ? a.length : 0);
const toTags = (arr) =>
  (Array.isArray(arr) ? arr : [])
    .slice(0, 4) // не спамим, максимум 4 тега
    .map((u, i) => `<li class="card-sw__tag" title="${u}">#${i + 1}</li>`)
    .join("");

export const renderPeople = (people) => {
  if (!people || typeof people !== "object") return "";

  const {
    name,
    birth_year,
    gender,
    eye_color,
    hair_color,
    height,
    mass,
    homeworld,
    films,
    starships,
    vehicles,
    url,
  } = people;

  const filmsCount = count(films);
  const shipsCount = count(starships);
  const vehiclesCount = count(vehicles);

  return `
  <article class="card-sw" data-person="${url || ""}">
    <header class="card-sw__header">
      <h3 class="card-sw__title">${fmt(name)}</h3>
      <div class="card-sw__subtitle">Born: ${fmt(birth_year)}</div>
      <span class="card-sw__accent" aria-hidden="true"></span>
    </header>

    <div class="card-sw__body">
      <dl class="card-sw__grid">
        <div><dt>Gender</dt><dd>${fmt(gender)}</dd></div>
        <div><dt>Eyes</dt><dd>${fmt(eye_color)}</dd></div>
        <div><dt>Hair</dt><dd>${fmt(hair_color)}</dd></div>
        <div><dt>Height</dt><dd>${fmt(height)} cm</dd></div>
        <div><dt>Mass</dt><dd>${fmt(mass)} kg</dd></div>
        <div><dt>Homeworld</dt><dd>${homeworld ? "↗" : "—"}</dd></div>
      </dl>

      <ul class="card-sw__stats">
        <li><span class="card-sw__stat-num">${filmsCount}</span><span class="card-sw__stat-label">Films</span></li>
        <li><span class="card-sw__stat-num">${shipsCount}</span><span class="card-sw__stat-label">Starships</span></li>
        <li><span class="card-sw__stat-num">${vehiclesCount}</span><span class="card-sw__stat-label">Vehicles</span></li>
      </ul>

      <div class="card-sw__links">
        <div class="card-sw__links-block">
          <div class="card-sw__links-title">Films</div>
          <ul class="card-sw__tags" data-urls='${JSON.stringify(films || [])}'>
            ${toTags(films)}
          </ul>
        </div>
        <div class="card-sw__links-block">
          <div class="card-sw__links-title">Starships</div>
          <ul class="card-sw__tags" data-urls='${JSON.stringify(
            starships || []
          )}'>
            ${toTags(starships)}
          </ul>
        </div>
        <div class="card-sw__links-block">
          <div class="card-sw__links-title">Vehicles</div>
          <ul class="card-sw__tags" data-urls='${JSON.stringify(
            vehicles || []
          )}'>
            ${toTags(vehicles)}
          </ul>
        </div>
      </div>
    </div>

    <footer class="card-sw__footer">
      <button class="card-sw__btn" data-action="details">Details</button>
      <button class="card-sw__btn card-sw__btn--ghost" data-action="open">Open in SWAPI</button>
    </footer>
  </article>
  `;
};

export const renderPlanet = (planet) => {
  if (!planet || typeof planet !== "object") return "";

  const {
    name,
    climate,
    terrain,
    population,
    diameter,
    gravity,
    orbital_period,
    rotation_period,
    surface_water,
    films,
    residents,
    url,
  } = planet;

  return `
  <article class="card-sw card-sw--planet" data-planet="${url || ""}">
    <header class="card-sw__header">
      <h3 class="card-sw__title">${fmt(name)}</h3>
      <div class="card-sw__subtitle">Climate: ${fmt(climate)}</div>
      <span class="card-sw__accent"></span>
    </header>

    <div class="card-sw__body">
      <dl class="card-sw__grid">
        <div><dt>Terrain</dt><dd>${fmt(terrain)}</dd></div>
        <div><dt>Population</dt><dd>${fmt(population)}</dd></div>
        <div><dt>Diameter</dt><dd>${fmt(diameter)} km</dd></div>
        <div><dt>Gravity</dt><dd>${fmt(gravity)}</dd></div>
        <div><dt>Orbital Period</dt><dd>${fmt(orbital_period)} days</dd></div>
        <div><dt>Rotation</dt><dd>${fmt(rotation_period)} h</dd></div>
        <div><dt>Water Surface</dt><dd>${fmt(surface_water)}%</dd></div>
      </dl>

      <ul class="card-sw__stats">
        <li><span class="card-sw__stat-num">${count(
          films
        )}</span><span class="card-sw__stat-label">Films</span></li>
        <li><span class="card-sw__stat-num">${count(
          residents
        )}</span><span class="card-sw__stat-label">Residents</span></li>
      </ul>
    </div>

    <footer class="card-sw__footer">
      <button class="card-sw__btn" data-action="details">Details</button>
      <button class="card-sw__btn card-sw__btn--ghost" data-action="open">Open in SWAPI</button>
    </footer>
  </article>
  `;
};

export const renderFilm = (film) => {
  if (!film || typeof film !== "object") return "";

  const {
    title,
    episode_id,
    director,
    producer,
    release_date,
    opening_crawl,
    characters,
    planets,
    starships,
    vehicles,
    species,
    url,
  } = film;

  return `
  <article class="card-sw card-sw--film" data-film="${url || ""}">
    <header class="card-sw__header">
      <h3 class="card-sw__title">${fmt(title)}</h3>
      <div class="card-sw__subtitle">Episode ${fmt(
        episode_id
      )} — Directed by ${fmt(director)}</div>
      <span class="card-sw__accent"></span>
    </header>

    <div class="card-sw__body">
      <p class="card-sw__crawl">${fmt(opening_crawl)}</p>

      <dl class="card-sw__grid">
        <div><dt>Producer</dt><dd>${fmt(producer)}</dd></div>
        <div><dt>Release Date</dt><dd>${fmt(release_date)}</dd></div>
      </dl>

      <ul class="card-sw__stats">
        <li><span class="card-sw__stat-num">${count(
          characters
        )}</span><span class="card-sw__stat-label">Characters</span></li>
        <li><span class="card-sw__stat-num">${count(
          planets
        )}</span><span class="card-sw__stat-label">Planets</span></li>
        <li><span class="card-sw__stat-num">${count(
          starships
        )}</span><span class="card-sw__stat-label">Starships</span></li>
        <li><span class="card-sw__stat-num">${count(
          vehicles
        )}</span><span class="card-sw__stat-label">Vehicles</span></li>
        <li><span class="card-sw__stat-num">${count(
          species
        )}</span><span class="card-sw__stat-label">Species</span></li>
      </ul>
    </div>

    <footer class="card-sw__footer">
      <button class="card-sw__btn" data-action="details">Details</button>
      <button class="card-sw__btn card-sw__btn--ghost" data-action="open">Open in SWAPI</button>
    </footer>
  </article>
  `;
};

export const renderSpecies = (species) => {
  if (!species || typeof species !== "object") return "";

  const {
    name,
    classification,
    designation,
    average_height,
    average_lifespan,
    language,
    eye_colors,
    hair_colors,
    skin_colors,
    films,
    people,
    homeworld,
    url,
  } = species;

  return `
  <article class="card-sw card-sw--species" data-species="${url || ""}">
    <header class="card-sw__header">
      <h3 class="card-sw__title">${fmt(name)}</h3>
      <div class="card-sw__subtitle">${fmt(classification)} — ${fmt(
    designation
  )}</div>
      <span class="card-sw__accent"></span>
    </header>

    <div class="card-sw__body">
      <dl class="card-sw__grid">
        <div><dt>Average Height</dt><dd>${fmt(average_height)} cm</dd></div>
        <div><dt>Average Lifespan</dt><dd>${fmt(
          average_lifespan
        )} yrs</dd></div>
        <div><dt>Language</dt><dd>${fmt(language)}</dd></div>
        <div><dt>Eye Colors</dt><dd>${fmt(eye_colors)}</dd></div>
        <div><dt>Hair Colors</dt><dd>${fmt(hair_colors)}</dd></div>
        <div><dt>Skin Colors</dt><dd>${fmt(skin_colors)}</dd></div>
        <div><dt>Homeworld</dt><dd>${homeworld ? "↗" : "—"}</dd></div>
      </dl>

      <ul class="card-sw__stats">
        <li><span class="card-sw__stat-num">${count(
          films
        )}</span><span class="card-sw__stat-label">Films</span></li>
        <li><span class="card-sw__stat-num">${count(
          people
        )}</span><span class="card-sw__stat-label">People</span></li>
      </ul>
    </div>

    <footer class="card-sw__footer">
      <button class="card-sw__btn" data-action="details">Details</button>
      <button class="card-sw__btn card-sw__btn--ghost" data-action="open">Open in SWAPI</button>
    </footer>
  </article>
  `;
};

export const renderVehicle = (vehicle) => {
  if (!vehicle || typeof vehicle !== "object") return "";

  const {
    name,
    model,
    manufacturer,
    vehicle_class,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    cost_in_credits,
    films,
    pilots,
    url,
  } = vehicle;

  return `
  <article class="card-sw card-sw--vehicle" data-vehicle="${url || ""}">
    <header class="card-sw__header">
      <h3 class="card-sw__title">${fmt(name)}</h3>
      <div class="card-sw__subtitle">${fmt(model)} — ${fmt(vehicle_class)}</div>
      <span class="card-sw__accent"></span>
    </header>

    <div class="card-sw__body">
      <dl class="card-sw__grid">
        <div><dt>Manufacturer</dt><dd>${fmt(manufacturer)}</dd></div>
        <div><dt>Length</dt><dd>${fmt(length)} m</dd></div>
        <div><dt>Speed</dt><dd>${fmt(max_atmosphering_speed)} km/h</dd></div>
        <div><dt>Crew</dt><dd>${fmt(crew)}</dd></div>
        <div><dt>Passengers</dt><dd>${fmt(passengers)}</dd></div>
        <div><dt>Cargo</dt><dd>${fmt(cargo_capacity)} kg</dd></div>
        <div><dt>Consumables</dt><dd>${fmt(consumables)}</dd></div>
        <div><dt>Cost</dt><dd>${fmt(cost_in_credits)} credits</dd></div>
      </dl>

      <ul class="card-sw__stats">
        <li><span class="card-sw__stat-num">${count(
          films
        )}</span><span class="card-sw__stat-label">Films</span></li>
        <li><span class="card-sw__stat-num">${count(
          pilots
        )}</span><span class="card-sw__stat-label">Pilots</span></li>
      </ul>
    </div>

    <footer class="card-sw__footer">
      <button class="card-sw__btn" data-action="details">Details</button>
      <button class="card-sw__btn card-sw__btn--ghost" data-action="open">Open in SWAPI</button>
    </footer>
  </article>
  `;
};

export const renderStarship = (ship) => {
  if (!ship || typeof ship !== "object") return "";

  const {
    name,
    model,
    manufacturer,
    starship_class,
    length,
    max_atmosphering_speed,
    hyperdrive_rating,
    MGLT,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    cost_in_credits,
    films,
    pilots,
    url,
  } = ship;

  return `
  <article class="card-sw card-sw--starship" data-starship="${url || ""}">
    <header class="card-sw__header">
      <h3 class="card-sw__title">${fmt(name)}</h3>
      <div class="card-sw__subtitle">${fmt(model)} — ${fmt(
    starship_class
  )}</div>
      <span class="card-sw__accent"></span>
    </header>

    <div class="card-sw__body">
      <dl class="card-sw__grid">
        <div><dt>Manufacturer</dt><dd>${fmt(manufacturer)}</dd></div>
        <div><dt>Length</dt><dd>${fmt(length)} m</dd></div>
        <div><dt>Speed</dt><dd>${fmt(max_atmosphering_speed)} km/h</dd></div>
        <div><dt>Hyperdrive Rating</dt><dd>${fmt(hyperdrive_rating)}</dd></div>
        <div><dt>MGLT</dt><dd>${fmt(MGLT)}</dd></div>
        <div><dt>Crew</dt><dd>${fmt(crew)}</dd></div>
        <div><dt>Passengers</dt><dd>${fmt(passengers)}</dd></div>
        <div><dt>Cargo Capacity</dt><dd>${fmt(cargo_capacity)} kg</dd></div>
        <div><dt>Consumables</dt><dd>${fmt(consumables)}</dd></div>
        <div><dt>Cost</dt><dd>${fmt(cost_in_credits)} credits</dd></div>
      </dl>

      <ul class="card-sw__stats">
        <li><span class="card-sw__stat-num">${count(
          films
        )}</span><span class="card-sw__stat-label">Films</span></li>
        <li><span class="card-sw__stat-num">${count(
          pilots
        )}</span><span class="card-sw__stat-label">Pilots</span></li>
      </ul>
    </div>

    <footer class="card-sw__footer">
      <button class="card-sw__btn" data-action="details">Details</button>
      <button class="card-sw__btn card-sw__btn--ghost" data-action="open">Open in SWAPI</button>
    </footer>
  </article>
  `;
};

export const renderList = (data, category) => {
  return data.results
    .map((element) => {
      switch (category) {
        case "people": {
          return renderPeople(element);
        }
        case "planets": {
          return renderPlanet(element);
        }
        case "films": {
          return renderFilm(element);
        }
        case "species": {
          return renderSpecies(element);
        }
        case "vehicles": {
          return renderVehicle(element);
        }
        case "starships": {
          return renderStarship(element);
        }
      }
    })
    .join("");
};
