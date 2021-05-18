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
        instanceGateway: {
            'instance_management.proto': path.resolve(__dirname, 'services', 'instance_gateway', 'instance_management.proto'),
            'instance_player_management.proto': path.resolve(__dirname, 'services', 'instance_gateway', 'instance_player_management.proto'),
            'instance_user_management.proto': path.resolve(__dirname, 'services', 'instance_gateway', 'instance_user_management.proto'),
            'instance_group_management.proto': path.resolve(__dirname, 'services', 'instance_gateway', 'instance_group_management.proto')
        },
        tradingSystem: {
            'registered_instance_user_service.proto': path.resolve(__dirname, 'services', 'trading_system', 'registered_instance_user_service.proto')
        }
    },
    instancePlugins: { // These service is provided in-directly via "Instance Gateway" service. Do not use these services directly.
        instanceManagement: {
            'instance_user_management.proto': path.resolve(__dirname, 'instance_plugins', 'instance_management', 'instance_user_management.proto'),
            'instance_group_management.proto': path.resolve(__dirname, 'instance_plugins', 'instance_management', 'instance_group_management.proto'),
            'instance_player_management.proto': path.resolve(__dirname, 'instance_plugins', 'instance_management', 'instance_player_management.proto')
        }
    }
}

export default protoFiles;
