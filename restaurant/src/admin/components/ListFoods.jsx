import {  Button,Card,CardActions,CardContent,Grid,Typography, } from "@mui/material";
import Foods from '../../data/Foods.json';

const ListFoods = () => {
    return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Book List</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {Foods.map((Food) => (
                <Grid item xs={4} key={Food.id}>
                  <Card>
                    <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {Food.food_category}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {Food.food_name}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {Food.food_price}
                      </Typography>
                      <Typography variant="body2">{Food.id}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View Details</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      );
};

export default ListFoods;