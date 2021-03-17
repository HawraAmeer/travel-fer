import { Card } from "@material-ui/core";
import { useState } from "react";

//TESTING
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

function ProfileItem() {
  const [ticket, setTicket] = useState({
    classNameType: "Economy",
    noOfPassenger: 3,

    depDate: "16-03-2021",
    arrDate: "17-03-2021",
    depTime: "14:00 Pm",
    arrTime: "08:00 AM",
    to: "JPN",
    from: "BAH",
  });

  const handleChange = (event) => {
    setTicket({ ...ticket, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <Accordion atomic={true}>
        <AccordionItem title="Airline1">
          <table className="table">
            <td></td>

            <td>
              <div class="card-header">
                <thead>
                  <h5>Seat Type</h5>
                </thead>
              </div>
            </td>

            <td>
              <div class="card-header">
                <thead>
                  <h5># of Passengers</h5>
                </thead>
              </div>
            </td>

            <tbody>
              <tr>
                <div class="card-header">
                  <thead>
                    <h4>Departure</h4>
                  </thead>
                  <td>
                    <thead>
                      <td>
                        <thead>Airport</thead>
                      </td>
                      <td>
                        <thead>Date</thead>
                      </td>
                      <td>
                        <thead>Time</thead>
                      </td>
                    </thead>
                  </td>
                  <Card>
                    <td>BAH</td>
                    <td>6 May 2021</td>
                    <td>3:37</td>
                  </Card>
                  <br />
                  <thead>
                    <h4>Arrival</h4>
                  </thead>

                  <td>
                    <thead>
                      <td>
                        <thead>Airport</thead>
                      </td>
                      <td>
                        <thead>Date</thead>
                      </td>
                      <td>
                        <thead>Time</thead>
                      </td>
                    </thead>
                  </td>
                  <Card>
                    <td>DXB</td>
                    <td>17 May 2021</td>
                    <td>7:37</td>
                  </Card>
                </div>

                <td>
                  <div class="card-header">
                    <Card>Economy</Card>
                  </div>
                </td>

                <td>
                  <div class="card-header">
                    <Card> 3 </Card>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default ProfileItem;
