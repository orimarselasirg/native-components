/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { RenderItemHeader } from '../components/ItemHeader';
import { SwitchComponent } from '../components/SwitchComponent';
import { View, Text } from 'react-native';

export const SwitchScreen = () => {
  const [state, setState] = React.useState({
    isActive: false,
    isHungry: false,
    isHappy: false,
  });

  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <RenderItemHeader title="Switches"/>
      <SwitchComponent isOn={state.isActive} title="isActive" onChange={(value)=>onChange(value, 'isActive')}/>
      <SwitchComponent isOn={state.isHappy}  title="isHappy"  onChange={(value)=>onChange(value, 'isHappy')}/>
      <SwitchComponent isOn={state.isHungry} title="isHungry" onChange={(value)=>onChange(value, 'isHungry')}/>
      <Text>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};
