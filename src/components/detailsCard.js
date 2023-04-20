import * as React from "react";
import "../styles.css";

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container} from "react-bootstrap";
// import Chart from "../components/chartComponent";
// import { Card } from "react-bootstrap";

// percent bars
import ProgressBar from 'react-bootstrap/ProgressBar';

//icons
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';


import * as opportunities from "../opportunities.json";



const DetailsCard = ({ detailsId }) => {
  //prop id passes from table component
  const [id, setId] = useState(detailsId);
  console.log("user id passed from table", detailsId);


  // update state when using next and previous buttons
  useEffect(() => {
    setId(detailsId);
  }, [detailsId]);

  // use id passed from props to match an id in the dataset
  const data = opportunities.default;
  const item = data.find((item) => item.oppId === Number(id));
  console.log("item:", item);

  console.log(item.salesCorpTier);
  const starRating = item.salesCorpTier.split("");
  console.log(starRating[0]);

  const showStarRating = starRating[0];
  console.log("raiting:", showStarRating);

  const [showRaiting, setShowRaiting] = useState(showStarRating);

  useEffect(() => {
    setShowRaiting(showStarRating);
  }, [showStarRating]);

  let unicodeStar = "\u{02605}";
  let unicideStarOutline = "\u{02606}";
  console.log(unicodeStar);

  let ratingAsStar = "";
  for (let x = 0; x < showRaiting; x++) {
    ratingAsStar += unicodeStar;
  }
  console.log(ratingAsStar);

  if (showRaiting < 5) {
    for (let x = showRaiting; x < 5; x++){
      ratingAsStar += unicideStarOutline;
    }
  }

  let upArrow = "\u{021E7}";
  console.log(upArrow);

  let downArrow = "\u{021E9}";
  console.log(upArrow);

  // const [show, setShow] = useState(false);

  // const showPHis = (e) => {
  //   setShow("pHisData");
  // };
  // const showIWin = (e) => {
  //   setShow("iWinData");
  // };
  // const showDWin = (e) => {
  //   setShow("dWinData");
  // };

  return (
    <>
      <Container id="card_container" style={{margin: "6SC", backgroundColor: "#F2F2F2"}}>
        <Row>
          <Col lg={12} style={{paddingTop: "10px"}}>
            <div className="square border shadow-sm p-3 mb-3 bg-body" style={{height: '110px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
              <h2>{item.oppName}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="square border shadow-sm p-2 mb-2 pt-3 bg-body" style={{minHeight: '150px', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{paddingBottom: '15px'}}>
                <PermIdentityOutlinedIcon fontSize="large"/>
              </div>
              <h5>{item.salesRepName}</h5>
              <p>Sales Rep</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="square border shadow-sm p-2 mb-2 pt-3 bg-body" style={{alignItems: 'center', justifyContent: 'center'}}>
                <div style={{paddingBottom: '15px'}}>
                  <StarPurple500OutlinedIcon fontSize="large"/>
                </div>
                <h4>
                  <span
                    style={{
                      color: 'red',
                    }}
                  >
                    {ratingAsStar}
                  </span>
                </h4>
                <p>
                  SC Tier
                </p>
            </div>          
          </Col>
          <Col lg={4}>
            <div className="square border shadow-sm p-2 mb-2 pt-3 bg-body" style={{minHeight: '150px', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{paddingBottom: '15px'}}> 
                <SearchOutlinedIcon fontSize="large"/>
              </div>
              <h5>
                {item.oppId}
              </h5>
              <p>
                Opp Id
              </p>
            </div>          
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="square border shadow-sm p-2 mb-3 pt-3 bg-body" style={{minHeight: '150px', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{paddingBottom: '15px'}}>
                <AttachMoneyOutlinedIcon fontSize="large"/>
              </div>
              <h5>
                {item.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD"
                })}
              </h5>
              <p>
                Amount
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="square border shadow-sm p-2 mb-3 pt-3 bg-body" style={{minHeight: '150px', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{paddingBottom: '15px'}}>
                <Inventory2OutlinedIcon fontSize="large"/>
              </div>
              <h5>
                {item.product}
              </h5>
              <p>
                Product
              </p>
            </div>          
          </Col>
          <Col lg={4}>
            <div className="square border shadow-sm p-2 mb-3 pt-3 bg-body" style={{minHeight: '150px', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{paddingBottom: '15px'}}>
                <ChecklistRtlOutlinedIcon fontSize="large"/>
              </div>
              <h5>
                {item.stage}
              </h5>                
              <p>
                Stage
              </p>
            </div>          
          </Col>
        </Row>


        <div className="square border shadow-sm p-2 mb-2 bg-body" >
          <Row style={{padding:"10px", margin: '10px'}}>
            <h3>Current Probability</h3>
            <div style={{padding: '25px'}}>
              <Row>
                <Col>
                    <p>Rep Probability</p>
                      <ProgressBar striped variant="info" now={Math.round(item.repProbability * 100)} />
                    <p>
                      {Math.round(item.repProbability * 100)}%
                    </p>
                </Col>
                <Col>
                    <p>SC Probability</p>
                      <ProgressBar striped variant="success" now={Math.round(item.salesCorpProbability * 100)} />
                    <p>
                      {Math.round(item.salesCorpProbability * 100)}%
                    </p>
                </Col>
              </Row>
            </div>
          </Row>
        </div>

        <div className="square border shadow-sm p-2 mb-2 bg-body" >
          <Row style={{padding:"15px", margin: '15px'}}>
            <h3>Probability History</h3>
            {item.probabilityHistory
              ?.sort((a, b) => a.daysAgo - b.daysAgo)
              .map((pHis, idx) => (
            <div key={idx} style={{padding: '25px', borderBottom: ' 1px solid grey'}}>
              <Row>
                <p>
                  Days Ago: {pHis.daysAgo}
                </p>

                <Col>
                  <p>
                    Rep Probability 
                  </p>
                  <ProgressBar striped variant="info" now={Math.round(pHis.repProb * 100)} />
                  <p>
                    {Math.round(pHis.repProb * 100)}%
                  </p>
                </Col>
                <Col>
                  <p>
                    SC Probability
                  </p>
                  <ProgressBar striped variant="success"
                    now={Math.round(pHis.salesCorpProb * 100)}
                  />
                  <p>
                    {Math.round(pHis.salesCorpProb * 100)}%
                  </p>
                </Col>
              </Row>
            </div>
          ))}
          </Row>
        </div>





      <div className="square border shadow-sm p-2 mb-2 bg-body" >
        <Row lg={12} style={{padding:"15px", margin: '15px'}}>
                <div style={{paddingBottom: '20px'}}>
                <h3>Win Factors</h3>
              </div>
          <Col lg={6}  >
  
                  <div style={{textAlign: 'left'}}>
                    <div style={{textAlign: 'center', borderBottom: '1px solid grey'}}>
                      <h4>
                        <span
                          style={{
                            paddingRight: 10,
                            fontSize: 30,
                            color: "green"
                          }}
                        >
                        {upArrow}
                        </span> 
                        Factors
                        </h4>
                    </div>

                    {item.salesCorpFactorsIncreasingWin?.map((iWin, idx) => (
                      <div key={idx} style={{display: 'flex', paddingTop: '15px'}}>
                        <div>
                          <span
                            style={{
                              paddingRight: 10,
                              fontSize: 20,
                              color: "green"
                            }}
                          >
                            {upArrow}
                          </span>
                          </div>
                          <div>
                            <p>
                            <strong>{iWin.name}</strong> <br/>
                            {iWin.message}. 
                            </p>
                          </div>
                      </div>
                    ))}
            
              </div>
            </Col>
            <Col>
                <div style={{textAlign: 'left'}} >
                  <div style={{textAlign: 'center', borderBottom: '1px solid grey'}}>
                    <h4>
                    <span
                      style={{
                        paddingRight: 10,
                        fontSize: 30,
                        color: "red"
                      }}
                    >
                      {downArrow}
                    </span>
                    Factors
                    </h4>
                  </div>
                  
                    {item.salesCorpFactorsDecreasingWin?.map((dWin, idx) => (
                      <div key={idx} style={{display: 'flex', paddingTop: '15px'}}>
                        <div>
                          <span
                            style={{
                              paddingRight: 10,
                              fontSize: 20,
                              color: "red"
                            }}
                          >
                            {downArrow}
                          </span>
                        </div>
                        <div>
                          <p>
                            <strong>{dWin.name}</strong> <br/>
                            {dWin.message}.
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
            </Col>
          </Row>
        </div>



        {/* <Row>
          <Col class  sm={3} style={{ paddingTop: 10 }}>
            <h3>{item.salesRepName}</h3>
            <p>
              <strong>Opp Id: </strong>
              {item.oppId}
            </p>
            <p>
              <strong>Opp Name: </strong>
              {item.oppName}
            </p>
            <p>
              <strong>Amount: </strong>
              {item.amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })}
            </p>
            <p>
              <strong>Product: </strong>
              {item.product}
            </p>
            <p>
              <strong>Stage: </strong>
              {item.stage}
            </p>
            <p>
              <strong>Rep Probability: </strong>
              {item.repProbability}
            </p>
            <Chart probValue={Math.round(item.repProbability * 100)} />
            <p>
              <strong>SC Probability: </strong>
              {item.salesCorpProbability}
            </p>
            <Chart probValue={Math.round(item.salesCorpProbability * 100)} />
            <p>
              <strong>SC Tier</strong>
            </p>
            <p>
              <strong>{ratingAsStar}</strong>
            </p>
          </Col>
          <Col sm={9} style={{ borderLeft: "solid 1SC" }}>
            <Row>
              <div style={{ padding: 10, paddingBetween: 5 }}>
                <Button size="sm" variant="dark" onClick={showPHis}>
                  Probability History
                </Button>
                <Button size="sm" variant="dark" onClick={showIWin}>
                  Factors Increasing Win
                </Button>
                <Button size="sm" variant="dark" onClick={showDWin}>
                  Factors Decreasing Win
                </Button>
              </div>

              {show === "pHisData" ? (
                <Col>
                  <h2>Probability History</h2>
                  {item.probabilityHistory?.map((pHis, idx) => (
                    <div key={idx}>
                      <Row style={{ borderBottom: "solid 1SC" }}>
                        <p>
                          <strong>Days Ago: </strong>
                          {pHis.daysAgo}
                        </p>
                        <Col>
                          <p>
                            <strong>SC Probability: </strong>
                            {pHis.salesCorpProb}
                          </p>
                          <Chart
                            probValue={Math.round(pHis.salesCorpProb * 100)}
                          />
                        </Col>
                        <Col>
                          <p>
                            <strong>Rep Probability: </strong>
                            {pHis.repProb}
                          </p>
                          <Chart probValue={Math.round(pHis.repProb * 100)} />
                        </Col>
                      </Row>
                    </div>
                  ))}
                </Col>
              ) : null}

              {show === "iWinData" ? (
                <Col style={{ textAlign: "left" }}>
                  <h2>Factors Increasing Win</h2>
                  {item.salesCorpFactorsIncreasingWin?.map((iWin, idx) => (
                    <div key={idx}>
                      <p>
                        <span
                          style={{
                            paddingRight: 10,
                            fontSize: 20,
                            color: "green"
                          }}
                        >
                          {upArrow}
                        </span>
                        <strong>{iWin.name}</strong> - {iWin.message}. Weight:{" "}
                        <u>{iWin.weight.description}</u>, Value:{" "}
                        {iWin.weight.value}
                      </p>
                    </div>
                  ))}
                </Col>
              ) : null}

              {show === "dWinData" ? (
                <Col style={{ textAlign: "left" }}>
                  <h2>Factors Decreasing Win</h2>
                  {item.salesCorpFactorsDecreasingWin?.map((dWin, idx) => (
                    <div key={idx}>
                      <p>
                        <span
                          style={{
                            paddingRight: 10,
                            fontSize: 20,
                            color: "red"
                          }}
                        >
                          {downArrow}
                        </span>
                        <strong>{dWin.name}</strong> - {dWin.message}. Weight:{" "}
                        <u>{dWin.weight.description}</u>, Value:{" "}
                        {dWin.weight.value}
                      </p>
                    </div>
                  ))}
                </Col>
              ) : null}
            </Row>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};
export default DetailsCard;
