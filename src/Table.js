import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";

import "./styles.css";


import * as opportunities from "./opportunities.json";
import DetailsCard from "./components/detailsCard";
// import { Padding } from "@mui/icons-material";

// styling for table and table elements
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    // fontFamily: "Lucida Console, monospace"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    // fontFamily: "Lucida Console, monospace"
  }
}));



const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

export default function BasicTable() {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */

  const data = opportunities.default;

  // state set up to toggle card
  const [showDetails, setShowDetails] = useState(false);
  // detailsId is held in state and passed as a prop to detailsCard to display proper json data
  const [detailsId, setDetailsId] = useState();
  console.log("id", detailsId);

  // state used to switch between cards
  const [currentRow, setCurrentRow] = useState(0);
  console.log("this row", currentRow);

  // functions to toggle between cards
  const handleNext = () => {
    console.log("next row");
    if (currentRow + 1 < data.length) {
      setCurrentRow(currentRow + 1);
      setDetailsId(data[currentRow + 1].oppId);
    }
  };

  const handlePrevious = () => {
    console.log("previous row");
    if (currentRow - 1 >= 0) {
      setCurrentRow(currentRow - 1);
      setDetailsId(data[currentRow - 1].oppId);
    }
  };

  // function handleRowClick(event, row) {
  //   setShowDetails()
  //   console.log("row", row);
  // }

  return (
    <div id="tabel_container" style={{ marginTop: "50SC" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Opp Name</StyledTableCell>
              <StyledTableCell align="left">Opp Stage</StyledTableCell>
              <StyledTableCell align="right">Rep Probability</StyledTableCell>
              <StyledTableCell align="right">SC Probability</StyledTableCell>
              <StyledTableCell align="left">SC Tier</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="left">Product</StyledTableCell>
              <StyledTableCell align="left">Sales Rep</StyledTableCell>
              {/* <StyledTableCell align="left">Details</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow
                onClick={() => {
                  setShowDetails(true);
                  setDetailsId(row.oppId);
                }}
                // onClick={(event) => handleRowClick(event, row)}
                key={row.oppId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.oppName}
                </StyledTableCell>
                <StyledTableCell align="left">{row.stage}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.repProbability}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.salesCorpProbability}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.salesCorpTier}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.amount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                  })}
                </StyledTableCell>
                <StyledTableCell align="left">{row.product}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.salesRepName}
                </StyledTableCell>
                {/* <StyledTableCell align="left">
                  <Link href={`/details/${row.oppId}`}>Details</Link>
                </StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showDetails && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            height: "80%",
            overflow: "auto"
          }}
        >
          <Card style={{backgroundColor: "#F2F2F2"}}>
            <div
              style={{ borderBottom: "solid 1SC", backgroundColor: "black"}}
            >
              <Button
                style={{ float: "left" }}
                onClick={handlePrevious}
                size="sm"
                variant="dark"
              >
                Previous
              </Button>
              <Button
                style={{ float: "left" }}
                onClick={handleNext}
                size="sm"
                variant="dark"
              >
                Next
              </Button>
              <Button
                size="sm"
                variant="dark"
                style={{ float: "right" }}
                onClick={() => setShowDetails(false)}
              >
                Exit
              </Button>
            </div>
            <div style={{padding: '15px'}}>
              <DetailsCard detailsId={detailsId} />
            </div>
            
          </Card>
        </div>
      )}
    </div>
  );
}
