import supabase from './services/supabaseClient.js';
import { setItems, setError } from '../slice/itemsSlice.jsx';  

// Fetch items
export const fetchItems = () => async (dispatch) => {
  try {
    const { data, error } = await supabase.from('students').select('*');
    if (error) {
      dispatch(setError(error.message));
      console.error('Error fetching items:', error.message);
    } else {
      dispatch(setItems(data)); 
    }
  } catch (err) {
    dispatch(setError('Unexpected error: ' + err.message)); 
    console.error('Unexpected error:', err.message);
  }
};

export const createItem = (newItem) => async (dispatch) => {
  try {
    const { data, error } = await supabase.from('students').insert(newItem).select();
    if (error) {
      dispatch(setError(error.message)); 
      console.error('Error creating item:', error.message);
    } else {
      dispatch(fetchItems()); 
    }
  } catch (err) {
    dispatch(setError('Unexpected error: ' + err.message));
    console.error('Unexpected error:', err.message);
  }
};
