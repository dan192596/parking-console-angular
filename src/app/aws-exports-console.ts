import {environment} from '../environments/environment';
const config = {
    identityPoolId: environment.consoleAuth.aws_cognito_identity_pool_id,
    region: environment.consoleAuth.aws_cognito_region,
    userPoolId: environment.consoleAuth.aws_user_pools_id,
    userPoolWebClientId: environment.consoleAuth.aws_user_pools_web_client_id,
    authenticationFlowType: environment.consoleAuth.authenticationFlowType,
};
export default config;
