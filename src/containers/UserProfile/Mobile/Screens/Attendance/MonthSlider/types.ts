export type Props = Readonly<IMonthSliderProps>

interface IMonthSliderProps {
    isRtl: boolean;
    initialSlide: number;
    changeMonth: (month: number) => void; 
  }