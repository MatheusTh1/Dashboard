import styled from 'styled-components';

    /** 
    * O que teremos em nosso Layout?
    * MH = Main Header
    * AS = Aside
    * CT = Content
    */

export const Grid = styled.div`
    /** Define o tamanho de cada area */
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;

    /** Define onde cada estrutura ficará no grid */
    grid-template-areas:
    'AS MH'
    'AS CT';

    /** Define 100% da viewport de altura da page */
    height: 100vh;
    
`;