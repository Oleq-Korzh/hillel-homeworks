import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

/*
{
  id: string,
  title: string,
  description: string,
  priority: string,
  status: string,
  assignee: string,
  projectId: string,
}
*/

const TASKS_URL = "http://localhost:3000/tasks";

export const getTasksAsync = createAsyncThunk(
  "tasks/getList",
  async (projectId = "") => {
    const result = await axios.get(`${TASKS_URL}/${projectId}`);
    return result.data;
  }
);

export const saveTaskAsync = createAsyncThunk("tasks/save", async (task) => {
  const result = await axios.post(TASKS_URL, task);
  return result.data;
});

export const deleteTaskAsync = createAsyncThunk("tasks/delete", async (id) => {
  const result = await axios.delete(`${TASKS_URL}/${id}`);

  return result.data;
});

export const editTaskAsync = createAsyncThunk(
  "tasks/edit",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const result = await axios.put(`${TASKS_URL}/${id}`, payload);

      return result.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue(error);
    }
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTasksAsync.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(deleteTaskAsync.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(editTaskAsync.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(saveTaskAsync.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  },
});

export default tasksSlice.reducer;
