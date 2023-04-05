package com.animatedprogressbar;

import android.widget.ProgressBar;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class AndroidProgressBarModule extends SimpleViewManager<ProgressBar> {
    public static final String REACT_CLASS = "AndroidProgressBarModule";
    ProgressBar videoView = null ;

    @Override
    public String getName() {
        return REACT_CLASS;
    }
    @Override
    protected ProgressBar createViewInstance(ThemedReactContext reactContext) {
        videoView =  new ProgressBar(reactContext, null, android.R.attr.progressBarStyleHorizontal);
        return videoView;
    }

    @ReactProp(name = "max")
    public void setMax(ProgressBar view, int progress) {
        view.setMax(progress);
    }

    @ReactProp(name = "progress")
    public void setProgress(ProgressBar view, int progress) {
        view.setProgress(progress);

    }
}
