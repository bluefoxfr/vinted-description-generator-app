import React from "react";
import style from 'styled-components';
import { Button } from '@chakra-ui/react';
import { TitleH1, H1, H4 } from "./Components/Text/Text.component";

export const Body = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2A2A2A;
  position: fixed;
  width: 100%;
  height: 100%;
  gap: 30px;
`

export const Title = style(TitleH1)`
  display: flex;
  align-items: center;
  text-align: center;
  flex: none;
  order: 0;
  flex-grow: 1;
  width: 400px;
  height: 98px;
  margin-top: 20px;
`

export const Desc = style(H1)`
  display: flex;
  align-items: center;
  text-align: center;
  flex: none;
  order: 0;
  flex-grow: 1;
`

export const Separator = style.img`
`

export const ExampleCard = style.img``

export const Signature = style(H4)`
  display: flex;
  align-items: center;
  text-align: center;
  flex: none;
  order: 0;
  flex-grow: 1;
`

export const SubmitButton = style(Button)`
  background-color: #007782;
`