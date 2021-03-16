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
    <tr>
      <td>
        <tr>
          <td>BAH</td>
          <td>6 May 2021</td>
          <td>3:37</td>
        </tr>
      </td>
      <td>
        <tr>
          <td>DXB</td>
          <td>17 May 2021</td>
          <td>7:37</td>
        </tr>
      </td>

      <td>economy</td>
      <td>3</td>
    </tr>
  );
}

export default ProfileItem;
