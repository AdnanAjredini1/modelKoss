import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
function Loading() {
  return (
    <Backdrop
      sx={(theme) => ({
        color: "#000",
        backgroundColor: "white",
        zIndex: theme.zIndex.drawer + 1,
      })}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loading;
