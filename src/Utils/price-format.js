export default function getFormatedPrice(price){
    if (price == null){
        return "N/A"
    }

    const priceNumber = Number(price); 

    if(isNaN(priceNumber)){
        return "N/A"
    }
    else{
        return "LKR "+priceNumber.toLocaleString("en-Us",{
            minimumFractionDigits: 2, maximumFractionDigits: 2
        });
    }
}