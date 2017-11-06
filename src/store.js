import thunkPlugin from 'kea-thunk'
import { getStore } from 'kea'


export default getStore({
  plugins: [ thunkPlugin ]
})