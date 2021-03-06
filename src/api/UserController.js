import Network from "../helpers/Network";
import { assertRequiredParams } from "../helpers/Params";
import store from "../store";
import { SetLoggedInUser } from "../store/actions/UserActions";

export const UserController = {    
    async login(username, password) {
        
        try {
            assertRequiredParams({username, password});
            let response = await Network.JsonRequest('POST', '/users/login', {username, password}, false);
            let user = response.user;
            let token = response.token;
            store.dispatch(SetLoggedInUser(user, token))
            return response;
        } catch (error) {
            console.log('TODO: HANDLE ERROR:login');
            throw error;
        }
    },
    getLoggedInUser() {
        try {
            return store.getState().user;
        } catch (error) {            
            console.log('TODO: HANDLE ERROR:getLoggedInUser');
            console.error(error);            
        }
    },
    async loadUser(userId) {
        try {
            assertRequiredParams({userId});
            let response = await Network.JsonRequest('GET', `/users/${userId}`);
            return response;
        } catch (error) {
            console.log('TODO: HANDLE ERROR:loadUser');
            console.error(error);            
        }
    },
    async loadUserMemberOf(userId) {
        try {
            assertRequiredParams({userId});
            let response = await Network.JsonRequest('GET', `/users/${userId}/memberOf`);
            return response;
        } catch (error) {
            console.log('TODO: HANDLE ERROR:loadUserMemberOf');
            console.error(error);            
        }
    }
}
