import { Card, Typography, Button } from "@material-tailwind/react";

const TABLE_HEAD = ["Name"];

const TABLE_ROWS = [
  {
    name: "TOEIC Certificates - 2012",
  },
  {
    name: "Alexa Liras",
  },
  {
    name: "Laurent Perrier",
  },
  {
    name: "Michael Levi",
  },
  {
    name: "Richard Gran",
  },
];

function GetCertificates() {
  return (
    <div className="flex-col w-full">
      <div className="flex flex-col text-center py-10 pb-2">
        <Typography variant="h1">Get your certificates !</Typography>
        <Typography variant="lead">
          Fetch all your certificates stored in blockchain and spend amount of
          gas.
        </Typography>
        <Button color="green" className="w-fit self-center mt-5">
          Fetch data
        </Button>
      </div>
      <div className="flex justify-center">
        <Card className="h-full w-[90%] mt-10 overflow-hidden">
          <table className="w-full min-w-max table-auto text-left">
            <tbody>
              {TABLE_ROWS.map(({ name, job, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes =
                  (isLast ? "p-4" : "p-4 border-b border-blue-gray-50") +
                  " flex items-center";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="mr-2">
                        <i className="fas fa-file-pdf text-red-500 mr-1"></i>
                      </div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal pl-2"
                      >
                        {name}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}

export default GetCertificates;
