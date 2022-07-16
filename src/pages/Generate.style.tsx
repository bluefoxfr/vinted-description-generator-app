import style from 'styled-components';
import { TitleH1 } from '../Components/Text/Text.component';

export const Body = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1B2845;
  position: absolute;
  width: 100%;
  min-height: 100%;
  gap: 30px;
`

export const Separator = style.img`
`

export const Form = style.div`
`


export const Title = style(TitleH1)<{ visible: boolean }>`
  display: flex;
  align-items: center;
  text-align: center;
  flex: none;
  order: 0;
  flex-grow: 1;
  width: 400px;
  max-height: 98px;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
  ${({ visible }) => (visible ? '' : 'visibility: hidden;')};
`

export const ResultContainer = style.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  flex: none;
  order: 0;
  min-width: 300px;
  min-height: fit-content;
  background: rgba(196, 196, 196, 0.3);
  border-radius: 3px;
  font-size: 20px;
  padding: 15px;
`