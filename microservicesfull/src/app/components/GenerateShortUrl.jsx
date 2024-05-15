import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import QRCode from "qrcode.react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const GenerateShortUrl = () => {
  const [response, setResponse] = useState(null);
  const [longUrl, setLongUrl] = useState("");
  const token = useSelector((state) => state.auth.token);

  const generateShortUrl = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const data = { url: longUrl };
      const response = await axios.post(
        "http://localhost:9094/api/shorturl/generate",
        data,
        config
      );
      setResponse(response.data);
    } catch (error) {
      console.error("Error generating short URL:", error);
    }
  };

  const handleRedirect = () => {
    window.open(response.originalUrl, "_blank");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Generate Short URL
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Enter Long URL"
          variant="outlined"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={generateShortUrl}>
          Generate Short URL
        </Button>
      </Grid>
      {response && (
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Response
              </Typography>
              <Typography variant="body1">Original URL: {response.originalUrl}</Typography>
              <Typography variant="body1">
                Short Link:{" "}
                <a href={`https://www.prince.com/${response.shortLink}`}>
                  https://www.prince.com/{response.shortLink}
                </a>
              </Typography>
              <Typography variant="body1">Expiration Date: {response.expirationDate}</Typography>
              <Typography variant="body1" gutterBottom>
                Scan QR Code:
              </Typography>
              <Box position="relative" display="inline-flex">
                <QRCode
                  value={response.originalUrl}
                  bgColor="#FFFFFF"
                  fgColor="#FFC0CB"
                  size={256}
                  level={"H"}
                  renderAs={"canvas"}
                />
                <Typography
                  variant="body1"
                  align="center"
                  style={{
                    position: "absolute",
                    bottom: "50%",
                    left: "50%",
                    transform: "translate(-50%, 50%)",
                    fontSize: "20px",
                    color: "#FFC0CB",
                  }}
                >
                  Prince
                </Typography>
              </Box>
              <br>
              </br>
              <Button variant="contained" onClick={handleRedirect}>
                Redirect to Original URL
              </Button>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

export default GenerateShortUrl;
