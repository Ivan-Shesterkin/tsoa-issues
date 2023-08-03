/**
 * String that contain only latin letters
 * @pattern ^[a-zA-Z]+$
 */
type ILatinString = string;
export interface User {
    /**
     * @minLength 2
     * @maxLength 15
     */
    nickname: ILatinString;
    /**
     * @minLength 2
     * @maxLength 10
     */
    clanName: ILatinString;
}
