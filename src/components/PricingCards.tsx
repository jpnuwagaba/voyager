import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const plans = [
  {
    name: "Freelance",
    level: "Basic",
    price: "$0",
    features: [
      "1 user",
      "Up to 5 projects",
      "Up to 10 collaborators per project",
      "2 GB storage",
    ],
  },
  {
    name: "Business",
    level: "Standard",
    price: "$29",
    features: [
      "10 users",
      "Unlimited projects",
      "Unlimited collaborators per project",
      "10 GB storage",
      "Integration",
    ],
  },
  {
    name: "Enterprise",
    level: "All Features",
    price: "Custom",
    features: [
      "Unlimited users",
      "Unlimited projects",
      "Unlimited collaborators per project",
      "Unlimited storage",
    ],
  },
];

export default function PricingCards() {
  return (
    <>
        <div className="container">
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
              gap: 2,
            }}
          >
            {plans.map((plan) => (
              <Card size="lg" variant="outlined" sx={{bgcolor: "#FEFAE0"}}>
                <Chip size="sm" variant="outlined" color="neutral">
                  {plan.level}
                </Chip>
                <Typography level="h2" sx={{textColor: "#eeeeee"}}>{plan.name}</Typography>
                <Divider inset="none" />
                <List
                  size="sm"
                  sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}
                >
                  {plan.features.map((feature) => (
                    <ListItem>
                      <ListItemDecorator>
                        <Check />
                      </ListItemDecorator>
                      {feature}
                    </ListItem>
                  ))}
                </List>
                <Divider inset="none" />
                <CardActions>
                  <Typography level="title-lg" sx={{ mr: "auto" }}>
                    {plan.price}{" "}
                    <Typography fontSize="sm" textColor="text.tertiary">
                      / month
                    </Typography>
                  </Typography>
                  <Button
                    variant="soft"
                    color="neutral"
                    endDecorator={<KeyboardArrowRight />}
                    // sx={{bgcolor: "#283618"}}
                  >
                    Start now
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </div>
    </>
  );
}
