// https://stackoverflow.com/questions/51248255/how-to-create-a-gradient-text-in-react-native
import React from 'react';
import {Text} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../assets/theme';

const GradientText = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={[colors.snuff, colors.rockBlue]}
        start={{x: 0, y: 0.5}}
        end={{x: 0.4, y: 0.5}}>
        <Text
          {...props}
          style={[
            props.style,
            {
              opacity: 0,
              shadowColor: 'rgba(0, 1.19, 3.57, 0)',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowRadius: 3,
              shadowOpacity: 1,
            },
          ]}
        />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
