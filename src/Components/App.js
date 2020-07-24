import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledContentArea = styled.div`
	position: relative;
	z-index: 1;

	width: 120rem;
	height: 100vh;
	margin: 0 auto;

	display: grid;
	grid-template-columns: 32rem 86.5rem;
	grid-auto-rows: min-content;
	grid-gap: 1.5rem;

	padding-top: 8rem;

	& #content-area-main-display-content {
		position: relative;
	}

`;
//look into useCallback hook ,, pretty useful
function App() {
    return(
    <StyledContentArea>
        Hello World...
    </StyledContentArea>
    );

}
if (document.getElementById('react_root')) {
    ReactDOM.render(<App />, document.getElementById('react_root'));
}