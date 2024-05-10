import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { CoordinateEnum } from '../../enums';

interface ICoordinatesState {
  lat: string;
  lon: string;
}

const initialState: ICoordinatesState = {
  lat: '',
  lon: '',
};

interface IProps {
  coordinateEnum: CoordinateEnum;
  text: string;
}

export const coordinatesSlice = createSlice({
  name: 'coordinate',
  initialState,
  reducers: {
    setCoordinate: (state, action: PayloadAction<IProps>) => {
      const payload: IProps = action.payload;
      if (payload.coordinateEnum == CoordinateEnum.Latitude) {
        state.lat = payload.text;
      } else if (payload.coordinateEnum == CoordinateEnum.Longitude) {
        state.lon = payload.text;
      }
    },
  },
});

export const { setCoordinate } = coordinatesSlice.actions;

export default coordinatesSlice.reducer;
