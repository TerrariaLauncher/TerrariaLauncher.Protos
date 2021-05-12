import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const protoFiles = {
    root: __dirname,
    'common_messages.proto': path.resolve(__dirname, 'common_messages.proto'),
    services: {
        authentication: {
            'authentication.proto': path.resolve(__dirname, 'services', 'authentication', 'authentication.proto'),
            'authorization.proto': path.resolve(__dirname, 'services', 'authentication', 'authorization.proto')
        },
        tShockGateway: {
            'tshock_instance_management.proto': path.resolve(__dirname, 'services', 'tshock_gateway', 'tshock_instance_management.proto'),
            'tshock_player_management.proto': path.resolve(__dirname, 'services', 'tshock_gateway', 'tshock_player_management.proto'),
            'tshock_user_management.proto': path.resolve(__dirname, 'services', 'tshock_gateway', 'tshock_user_management.proto'),
            'tshock_group_management.proto': path.resolve(__dirname, 'services', 'tshock_gateway', 'tshock_group_management.proto')
        }
    },
    tShockPlugins: { // These service is provided in-directly via tShockGateway service. Do not use these services directly.
        tShockManagement: {
            'tshock_user_management.proto': path.resolve(__dirname, 'tshock_plugins', 'tshock_management', 'tshock_user_management.proto'),
            'tshock_group_management.proto': path.resolve(__dirname, 'tshock_plugins', 'tshock_management', 'tshock_group_management.proto'),
            'tshock_player_management.proto': path.resolve(__dirname, 'tshock_plugins', 'tshock_management', 'tshock_player_management.proto')
        },
        inGameEconomy: {
            'banking_service.proto': path.resolve(__dirname, 'tshock_plugins', 'ingame_enconomy', 'banking_service.proto')
        }
    }
}

export default protoFiles;
