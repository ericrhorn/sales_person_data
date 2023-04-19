import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import Chart from "../components/chartComponent";

import * as opportunities from "../opportunities.json";

const Details = () => {
  const { id } = useParams();
  console.log("id:", id);

  const data = opportunities.default;
  const item = data.find((item) => item.oppId === Number(id));
  console.log("item:", item);

  console.log(item.pilytixTier);
  const starRating = item.pilytixTier.split("");
  console.log(starRating[0]);

  const showStarRating = starRating[0];
  console.log("raiting:", showStarRating);

  const [showRaiting, setShowRaiting] = useState(showStarRating);

  let unicodeStar = "\u{02605}";
  console.log(unicodeStar);

  let ratingAsStar = "";
  for (let x = 0; x < showRaiting; x++) {
    ratingAsStar += unicodeStar;
  }
  console.log(ratingAsStar);

  const [show, setShow] = useState(false);

  const showPHis = (e) => {
    setShow("pHisData");
  };
  const showIWin = (e) => {
    setShow("iWinData");
  };
  const showDWin = (e) => {
    setShow("dWinData");
  };

  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/chart">Chart</Link>
      <Container>
        <Row style={{ border: "solid" }}>
          <Col sm={3} style={{ border: "solid" }}>
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
              <strong>PX Probability: </strong>
              {item.pilytixProbability}
            </p>
            <Chart probValue={Math.round(item.pilytixProbability * 100)} />
            <p>
              <strong>PX Tier</strong>
            </p>
            <p>
              <strong>{ratingAsStar}</strong>
            </p>
          </Col>
          <Col>
            <Row>
              <div>
                <Button onClick={showPHis}>Probability History</Button>
                <Button onClick={showIWin}>Factors Increasing Win</Button>
                <Button onClick={showDWin}>Factors Decreasing Win</Button>
              </div>

              {show === "pHisData" ? (
                <Col>
                  <h2>Probability History</h2>
                  {item.probabilityHistory?.map((pHis, idx) => (
                    <div key={idx}>
                      <Row style={{ borderBottom: "solid 1px" }}>
                        <p>
                          <strong>Days Ago: </strong>
                          {pHis.daysAgo}
                        </p>
                        <Col>
                          <p>
                            <strong>PX Probability: </strong>
                            {pHis.pilytixProb}
                          </p>
                          <Chart
                            probValue={Math.round(
                              item.pilytixProbability * 100
                            )}
                          />
                        </Col>
                        <Col>
                          <p>
                            <strong>Rep Probability: </strong>
                            {pHis.repProb}
                          </p>
                          <Chart
                            probValue={Math.round(item.repProbability * 100)}
                          />
                        </Col>
                      </Row>
                    </div>
                  ))}
                </Col>
              ) : null}

              {show === "iWinData" ? (
                <Col>
                  <h2>Factors Increasing Win</h2>
                  {item.pilytixFactorsIncreasingWin?.map((iWin, idx) => (
                    <div key={idx}>
                      <p>Days Ago: {iWin.name}</p>
                      <p>Message: {iWin.message}</p>
                      <p>weight value: {iWin.weight.value}</p>
                      <p>description: {iWin.weight.description}</p>
                    </div>
                  ))}
                </Col>
              ) : null}

              {show === "dWinData" ? (
                <Col>
                  <h2>Factors Decreasing Win</h2>
                  {item.pilytixFactorsDecreasingWin?.map((dWin, idx) => (
                    <div key={idx}>
                      <p>Days Ago: {dWin.name}</p>
                      <p>Message: {dWin.message}</p>
                      <p>weight value: {dWin.weight.value}</p>
                      <p>description: {dWin.weight.description}</p>
                    </div>
                  ))}
                </Col>
              ) : null}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Details;
