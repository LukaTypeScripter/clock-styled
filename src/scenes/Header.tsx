import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StylesTheme } from "../components/styled";
import axios from "axios";

const API_URL = "https://api.quotable.io/random";



export default function Header() {
  const [programmingQute, setProgramingQute] = useState('');
  const [quoteAuthor,setquoteAuthor] = useState('')

  const fetchQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        setProgramingQute(response.data.content);
        setquoteAuthor(response.data.author)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

 

  return (
    <HeaderCont>
      <Flex>
        <Abouts>
         "{programmingQute? programmingQute : ` “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”`}
"

        </Abouts>
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z"
            fill="#FFF"
            fill-rule="nonzero"
            opacity=".5"
            onClick={fetchQuote}
          />
        </svg>
      </Flex>
<Author>{quoteAuthor ? quoteAuthor : 'Ada Lovelace'}</Author>
    </HeaderCont>
  );
}

const HeaderCont = styled.header`
  padding-top: 32px;
  margin-left: 26px;
`;
const Abouts = styled.p`
  width: 290px;
  font-weight: ${StylesTheme.fontWeigths.lowWeigth};
  font-size: 12px;
  line-height: 22px;
  color: ${StylesTheme.colors.white};
`;
const RefreshImg = styled.div``;
const Flex = styled.div`
  display: flex;
  column-gap: 16.67px;
`;
const Author = styled.p`
    font-size: 12px;
line-height: 22px;
font-weight: ${StylesTheme.fontWeigths.mediumWeigth};
color:${StylesTheme.colors.white};
margin-top: 8px;
`
