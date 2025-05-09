import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import trianglesImage from "../assets/images/triangles.png";
import Carousel from "react-material-ui-carousel";
import CustomerCard from "../components/Cards/CustomerCard.jsx";

const customerOpinions = [
    { id: 1, fullname: "John Doe", user: "@johndoe", opinion: "Excellent!" },
    { id: 2, fullname: "Jane Smith", user: "@janesmith", opinion: "Great!" },
    { id: 3, fullname: "Peter Jones", user: "@peterjones", opinion: "Perfect!" },
    { id: 4, fullname: "Alice Brown", user: "@alicebrown", opinion: "Good!" },
    { id: 5, fullname: "David Lee", user: "@davidlee", opinion: "Very good!" },
    { id: 6, fullname: "Susan White", user: "@susanwhite", opinion: "Amazing!" },
  ];

const FourthSection = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm =  useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const groupedOpinions = groupOpinions(customerOpinions, isXs || isSm ? 1 : 3);

    function groupOpinions(opiniones, cantidadPorGrupo) {
        const grupos = [];
        for (let i = 0; i < opiniones.length; i += cantidadPorGrupo) {
            grupos.push(opiniones.slice(i, i + cantidadPorGrupo));
        }
        return grupos;
    }

    const RenderedCustomerOpinions = () => {
        return (
            <Box>
                <Carousel sx={{paddingInline: "3em", paddingTop: "2em"}}>
                    {groupedOpinions.map((items, index) => (
                        <Grid container spacing={1} key={index}>
                            {items.map((item) => (
                                <Grid item justifyItems="center" xs={12} sm={12} md={4} key={item.id}>
                                    <CustomerCard item={item} />
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Carousel>
            </Box>
        );
    };

    return (
        <Box flex={1} mt={{ xs:25, sm:25, md:15, lg:15}}
            sx={{
                backgroundImage: `url(${trianglesImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>
            <Box textAlign={"center"}>
                <Typography variant="h2" fontWeight={600}>Customer Opinions</Typography>
            </Box>
            <RenderedCustomerOpinions />
        </Box>
    );
};

export default FourthSection;