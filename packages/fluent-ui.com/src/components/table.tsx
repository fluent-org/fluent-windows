import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  display: block;
  overflow: hidden;
  overflow-x: auto;
  margin-bottom: 16px;
  border-spacing: 0;
  border-collapse: collapse;
  font-size: 14px;
  font-family: monospace, PingFangSC-Regular, sans-serif, Arial, Helvetica, Roboto;
  color: rgb(57, 58, 52);
  thead {
    color: rgba(0, 0, 0, 0.54);
    font-weight: 500;
    tr {
      height: 64px;
      th {
        padding: 0 16px 0 8px;
        text-align: left;
        font-weight: 500;
        white-space: pre;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        &:nth-child(2) {
          width: 24%;
        }
      }
    }
  }
  tbody {
    color: rgba(0, 0, 0, 0.87);
    line-height: 1.5;
    tr {
      height: 48px;
      td {
        padding: 8px 16px 8px 8px;
        text-align: left;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        &:nth-child(1) {
          color: rgb(0, 0, 159);
          font-weight: 500;
        }
        &:nth-child(2) {
          color: rgb(227, 17, 108);
          word-break: break-all;
        }
        &:nth-child(3) {
          color: #999;
        }
      }
    }
  }
`

export default Table
