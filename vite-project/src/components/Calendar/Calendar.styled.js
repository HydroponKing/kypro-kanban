import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDayNames = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
`;

export const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;

  &.-weekend- {
    color: #ff6d00;
  }
`;

export const CalendarCells = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  cursor: pointer;

  &._other-month {
    opacity: 0.4;
  }

  &._cell-day:hover {
    background-color: #EAEEF6; /* Исправленный цвет */
  }

  &._active-day {
    background-color: #94a6be;
    color: #ffffff;
  }

  &._current {
    font-weight: 700;
  }
`;

export const CalendarPeriod = styled.p`
  color: #94a6be;
  font-size: 10px;

  span {
    color: #000;
  }
`;
