import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('Window').height;

export default {
    window: {
        width,
        height,
    },
    isSmallDevice: width < 375
}
