export default function HandleDigits(likes:number){
    let formatter = Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(likes) as string;
}