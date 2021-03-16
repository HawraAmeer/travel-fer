import { useState } from "react";

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
    <>
      <table className="table table-striped table-hover">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <h3 className="list-group-item-heading">Booking History</h3>
            </thead>
            <tbody>
              <tr className="align-bottom">
                <td>
                  <div className="col-sm-5">
                    <dt class="col-sm-3">
                      <h5 className="list-group-item-heading">
                        {ticket.classNameType}
                      </h5>
                    </dt>

                    <dd className="col-sm-9" style={{ paddingLeft: "40px" }}>
                      <p className="list-group-item-text">
                        Passsengers: {ticket.noOfPassenger}
                      </p>
                      <p className="list-group-item-text">
                        From {ticket.from} To {ticket.to}
                      </p>
                      <p className="list-group-item-text">
                        {ticket.depDate} To {ticket.arrDate}
                      </p>
                      <p className="list-group-item-text">
                        {ticket.depTime} To {ticket.arrTime}
                      </p>
                    </dd>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </table>
    </>
  );
}

export default ProfileItem;
