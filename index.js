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
        }
    },
    tShockPlugins: {
        tShockManagement: {
            'tshock_user_management.proto': path.resolve(__dirname, 'tshock_plugins', 'tshock_management', 'tshock_user_management.proto'),
            'tshock_group_management.proto': path.resolve(__dirname, 'tshock_plugins', 'tshock_management', 'tshock_group_management.proto'),
            'tshock_player_management.proto': path.resolve(__dirname, 'tshock_plugins', 'tshock_management', 'tshock_player_management.proto')
        }
    }
}

export default protoFiles;
