/**
 * This class has all the methods needed to validate the data
 * before sending it to the database or the application backend.
 * @author Moayad Alkhaib
 * @created 2021-01-31
 */
class Validators{
    /**
     * checks if a field is not empty.
     */
    static isEmpty(field){
        if(field == null || field == ''){
            return true
        }else{
            return false
        }
    }
    
}module.exports=Validators;