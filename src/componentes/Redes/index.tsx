import { styled } from "styled-components";

interface Props {
    fill?: string  
}
const RedesStyles = styled.div`
    width: 25px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
    font-size: 15px;
    justify-items: end;
    &:hover {
        transform: scale(1.06);
        transition: all 0.9s;
    }
    
`
const Instagram = ({fill} :Props) => {
    return(
        <RedesStyles>
            <svg aria-hidden="true" focusable="false" viewBox="0 0 18 18">
                <path fill={fill} d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path>
                <path fill={fill} d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"></path>
            </svg>        
        </RedesStyles>
    );
}
const Facebook = ({fill} :Props) => {
    return(
        <RedesStyles>
        <svg aria-hidden="true" focusable="false" viewBox="0 0 18 18">
            <path fill={fill} d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z"></path>
        </svg>
        </RedesStyles>
    );
}
const Youtube = ({fill} :Props) => {
    return(
        <RedesStyles>
            <svg aria-hidden="true" focusable="false" viewBox="0 0 100 70">
                <path fill={fill} d="M98 11c2 7.7 2 24 2 24s0 16.3-2 24a12.5 12.5 0 01-9 9c-7.7 2-39 2-39 2s-31.3 0-39-2a12.5 12.5 0 01-9-9c-2-7.7-2-24-2-24s0-16.3 2-24c1.2-4.4 4.6-7.8 9-9 7.7-2 39-2 39-2s31.3 0 39 2c4.4 1.2 7.8 4.6 9 9zM40 50l26-15-26-15v30z">
                </path>
            </svg>
        </RedesStyles>
    );
}
const Twitter = ({fill} :Props) => {
    return(
        <RedesStyles>
            <svg aria-hidden="true" focusable="false" viewBox="0 0 18 15">
                <path fill={fill} d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z">
                </path>
            </svg>
        </RedesStyles>
    );
}
const Pinterest = ({fill} :Props) => {
    return(
        <RedesStyles>
            <svg aria-hidden="true" focusable="false" viewBox="0 0 17 18">
                <path fill={fill} d="M8.48.58a8.42 8.42 0 015.9 2.45 8.42 8.42 0 011.33 10.08 8.28 8.28 0 01-7.23 4.16 8.5 8.5 0 01-2.37-.32c.42-.68.7-1.29.85-1.8l.59-2.29c.14.28.41.52.8.73.4.2.8.31 1.24.31.87 0 1.65-.25 2.34-.75a4.87 4.87 0 001.6-2.05 7.3 7.3 0 00.56-2.93c0-1.3-.5-2.41-1.49-3.36a5.27 5.27 0 00-3.8-1.43c-.93 0-1.8.16-2.58.48A5.23 5.23 0 002.85 8.6c0 .75.14 1.41.43 1.98.28.56.7.96 1.27 1.2.1.04.19.04.26 0 .07-.03.12-.1.15-.2l.18-.68c.05-.15.02-.3-.11-.45a2.35 2.35 0 01-.57-1.63A3.96 3.96 0 018.6 4.8c1.09 0 1.94.3 2.54.89.61.6.92 1.37.92 2.32 0 .8-.11 1.54-.33 2.21a3.97 3.97 0 01-.93 1.62c-.4.4-.87.6-1.4.6-.43 0-.78-.15-1.06-.47-.27-.32-.36-.7-.26-1.13a111.14 111.14 0 01.47-1.6l.18-.73c.06-.26.09-.47.09-.65 0-.36-.1-.66-.28-.89-.2-.23-.47-.35-.83-.35-.45 0-.83.2-1.13.62-.3.41-.46.93-.46 1.56a4.1 4.1 0 00.18 1.15l.06.15c-.6 2.58-.95 4.1-1.08 4.54-.12.55-.16 1.2-.13 1.94a8.4 8.4 0 01-5-7.65c0-2.3.81-4.28 2.44-5.9A8.04 8.04 0 018.48.57z">
                </path>
            </svg>
        </RedesStyles>
    );
}
const Whatsapp = ({fill} :Props) => {
    return(
        <RedesStyles>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                <path d="M4.906-10.969A6.719,6.719,0,0,1,7-6.062,6.634,6.634,0,0,1,4.938-1.156,6.788,6.788,0,0,1,0,.875,6.754,6.754,0,0,1-3.312.031L-7,1l1-3.594a6.72,6.72,0,0,1-.937-3.469,6.685,6.685,0,0,1,2.031-4.906A6.685,6.685,0,0,1,0-13,6.685,6.685,0,0,1,4.906-10.969ZM0-.281a5.615,5.615,0,0,0,4.094-1.7A5.539,5.539,0,0,0,5.813-6.062a5.418,5.418,0,0,0-1.75-4.062A5.538,5.538,0,0,0,0-11.812a5.59,5.59,0,0,0-4.078,1.688,5.513,5.513,0,0,0-1.7,4.063A5.543,5.543,0,0,0-4.875-3l.125.219L-5.344-.656l2.188-.562.219.125A5.572,5.572,0,0,0,0-.281ZM3.156-4.625a1.022,1.022,0,0,1,.344.219,1.414,1.414,0,0,1-.125.844,1.216,1.216,0,0,1-.484.516,1.579,1.579,0,0,1-.672.3A3.961,3.961,0,0,1,.125-3.187a5.417,5.417,0,0,1-.547-.281,4.241,4.241,0,0,1-.5-.344Q-1.156-4-1.375-4.187t-.406-.375q-.187-.187-.344-.359t-.281-.328q-.125-.156-.2-.266t-.141-.2l-.062-.094a3.076,3.076,0,0,1-.719-1.781,2.212,2.212,0,0,1,.594-1.469.708.708,0,0,1,.469-.187h.344a.368.368,0,0,1,.375.281l.531,1.281a.345.345,0,0,1,.031.313,1.762,1.762,0,0,1-.312.484q-.187.2-.219.234t.031.219A3.849,3.849,0,0,0-.734-5.219a8.222,8.222,0,0,0,1.391.844q.25.125.375-.031.406-.469.563-.687a.283.283,0,0,1,.375-.094Q2.219-5.094,3.156-4.625Z" transform="translate(7 13)" fill={fill}></path>
            </svg>
        </RedesStyles>
    );
}
const Email = ({fill} :Props) => {
    return(
        <RedesStyles>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 11.25">
                <path d="M6.094-11.25H-6.094A1.406,1.406,0,0,0-7.5-9.844v8.437A1.406,1.406,0,0,0-6.094,0H6.094A1.406,1.406,0,0,0,7.5-1.406V-9.844A1.406,1.406,0,0,0,6.094-11.25Zm0,1.406v1.2c-.657.535-1.7,1.367-3.943,3.12C1.657-5.14.68-4.208,0-4.219c-.68.011-1.658-.922-2.151-1.31-2.238-1.753-3.286-2.585-3.943-3.12v-1.2ZM-6.094-1.406V-6.844c.671.535,1.623,1.285,3.074,2.421.64.5,1.762,1.617,3.019,1.61S2.359-3.9,3.019-4.422c1.451-1.136,2.4-1.887,3.075-2.421v5.438Z" transform="translate(7.5 11.25)" fill={fill}></path>
            </svg>
        </RedesStyles>
    );
}

export {
    Instagram,
    Facebook,
    Youtube,
    Twitter,
    Pinterest,
    Whatsapp,
    Email
}