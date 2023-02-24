import { jsPDF } from "jspdf";

export const generatePDF = (trip) => {
  const {
    id,
    startLocation,
    endLocation,
    price,
    distance,
    time,
    distanceCost,
    drivingCost,
  } = trip;

  if (
    !id ||
    !startLocation ||
    !endLocation ||
    price == null ||
    time == null ||
    distanceCost == null ||
    drivingCost == null ||
    distance == null
  ) {
    throw new Error("can't create pdf report some fiields are empty");
  }

  const doc = new jsPDF();
  doc.setFont("times", "bold");
  doc.text(`Trip`, 105, 10, null, null, "center");
  doc.text(
    `From ${startLocation.name} to ${endLocation.name}`,
    105,
    20,
    null,
    null,
    "center"
  );
  doc.setLineWidth(1);
  doc.line(0, 25, 220, 25);
  doc.setFont("times", "normal");
  doc.text(`Distance: ${distance} km`, 10, 40);
  doc.text(`Price per kilometer: ${price} $ per km`, 10, 50);
  doc.text(
    `Time: ${
      Math.round(time / 60) ? `${Math.round(time / 60)} h` : ""
    } ${Math.round(time % 60)} min`,
    10,
    60
  );
  doc.text(`Cost of distance: ${distanceCost} $`, 10, 70);
  doc.text(
    `Trip length: ${drivingCost / 1000} day${
      drivingCost / 1000 > 1 ? "s" : ""
    }`,
    10,
    80
  );
  doc.text(`Cost of driving: ${drivingCost} $`, 10, 90);
  doc.text(
    `Total cost: ${Math.round((distanceCost + drivingCost) * 100) / 100} $`,
    10,
    100
  );
  doc.save(`trip-${id}.pdf`);
};
