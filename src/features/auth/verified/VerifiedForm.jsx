import { Button, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import MySnackBar from "../../shared/snackbar";

const VerifiedForm = () => {
  const [snackBar, setSnackBar] = useState({
    message: "Email successfully resent",
    type: "success",
    open: false,
  });
  const handleSetOpenSnackBar = (status) => {
    setSnackBar({
      ...snackBar,
      open: status,
    });
  };
  return (
    <div className="flex flex-col h-full justify-center items-center gap-8 relative ">
      <Introduce />
      <ResendArea setOpenSnackBar={handleSetOpenSnackBar} />
      <MySnackBar
        message={snackBar.message}
        type={snackBar.type}
        setOpen={(status) => handleSetOpenSnackBar(status)}
        open={snackBar.open}
      />
    </div>
  );
};

const ResendArea = ({ setOpenSnackBar }) => {
  const handleSubmit = () => {
    setOpenSnackBar(true);
  };
  return (
    <div className="flex flex-col gap-8 w-full items-center justify-center">
      <Button
        onClick={handleSubmit}
        sx={{ borderRadius: 90 }}
        variant="primary filled"
      >
        Resend email
      </Button>
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 400,
          color: "#5C5668",
        }}
      >
        Need help?
        <Link
          underline="none"
          sx={{
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {" Contact Us"}
        </Link>
      </Typography>
    </div>
  );
};

const Introduce = () => {
  return (
    <div className="flex flex-col w-full gap-2 items-center items-center justify-center">
      <Typography
        sx={{
          fontSize: 40,
          fontWeight: 700,
          color: "#121115",
        }}
      >
        Verify your Email
      </Typography>
      <div className="flex flex-col gap-8 w-full items-center justify-center text-center">
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 400,
            color: "#5C5668",
          }}
        >
          You’re almost there! We sent an email to{" "}
          <span className="text-[#121115] font-[500] text-[14px]">
            jane.cooper@gmail.com
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 400,
            color: "#5C5668",
          }}
        >
          Just click on the link in that email to complete your signup. If you
          don't see it, you may need to check your spam folder.
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 400,
            color: "#5C5668",
          }}
        >
          Still can’t find the email?
        </Typography>
      </div>
    </div>
  );
};

export default VerifiedForm;
