import React from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

/**
 * AnimatedListItem wraps any list item and applies a subtle staggered fade-in + slide-down animation on mount.
 */
const AnimatedListItem = ({ children, index = 0, delay = 50, duration = 300, style }) => {
    return (
        <Animated.View
            entering={FadeInDown.delay(Math.min(index * delay, 400)).duration(duration).springify().damping(14)}
            style={style}
        >
            {children}
        </Animated.View>
    );
};

export default AnimatedListItem;
