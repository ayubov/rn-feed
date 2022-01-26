import React, { FC, useEffect, useState } from 'react';
import { ViewProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  withRepeat,
  interpolateColor,
  Easing,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';

import { useIsMountedRef } from 'hooks';

type SkeletonProps = ViewProps & {
  show: boolean;
};

const PULSE_INTERVAL = 400;
const FADE_DELAY = 250;
const FADE_DURATION = 200;
const EASING = Easing.bezier(0.33, 0.0, 0.67, 1.0);

const Skeleton: FC<SkeletonProps> = ({ style, show = false, ...restProps }) => {
  const [visible, setVisible] = useState(show);
  const isMountedRef = useIsMountedRef();

  const backgroundColor = useSharedValue(0);
  const opacity = useSharedValue(show ? 1 : 0);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      backgroundColor.value,
      [0, 1],
      ['rgb(234,236,239)', 'rgb(223,226,230)'],
    ),
    opacity: opacity.value,
  }));

  const handleAnimationFinished = (v: boolean) => {
    if (isMountedRef.current) {
      setVisible(v);
    }
  };

  useEffect(() => {
    if (show) {
      setVisible(true);
      backgroundColor.value = withRepeat(
        withTiming(1, {
          duration: PULSE_INTERVAL,
          easing: EASING,
        }),
        -1,
        true,
      );
      opacity.value = withTiming(1, {
        duration: FADE_DURATION,
        easing: EASING,
      });
    } else {
      backgroundColor.value = withDelay(
        FADE_DELAY + FADE_DURATION,
        withTiming(0, {
          duration: 0,
        }),
      );
      opacity.value = withDelay(
        FADE_DELAY,
        withTiming(
          0,
          {
            duration: FADE_DURATION,
            easing: EASING,
          },
          isFinished => runOnJS(handleAnimationFinished)(!isFinished),
        ),
      );
    }
  }, [show]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        animatedStyle,
        style,
      ]}
      pointerEvents="none"
      {...restProps}
    />
  );
};

export default Skeleton;
