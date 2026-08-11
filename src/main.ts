import { fetchProductCatalog, fetchProductReviews, fetchSalesReport, DataError, NetworkError } from "./apiSimulator";

function handleApiCalls() {
    fetchProductCatalog()
        .then(products => {
            console.log(products);

            const reviewPromises = products.map(product =>
                fetchProductReviews(product.id)
            );

            return Promise.all(reviewPromises);
        })
        .then(reviews => {
            console.log(reviews);

            return fetchSalesReport();
        })
        .then(report => {
            console.log(report);
        })
        .catch(error => {
            if (error instanceof DataError) {
                console.error("Error in handleApiCalls:", error.message);
            } else if (error instanceof NetworkError) {
                console.error("Error in API calls:", error.message);
            } else {
                console.error("Unexpected error:", error);
            }
        })
        .finally(() => {
            console.log("All API calls have been attempted.");
        });
}

handleApiCalls();