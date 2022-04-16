class Formatter{
    static number(number){
        if(number < 10){
            return `0${number}`
        }
        return number;
    }
}

export default Formatter;