package by.ales.android.moneypadpp;

import android.annotation.SuppressLint;
import android.content.pm.ApplicationInfo;
import android.os.Build;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    private WebView webView;
    private Button refreshBtn;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = (WebView) findViewById(R.id.activity_main_webview);
        webView.setWebViewClient(new AssetWebViewClient());
        WebSettings webSettings = webView.getSettings();

        webView.loadUrl(BuildConfig.webAppUrl);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            webSettings.setJavaScriptEnabled(true);
            if (0 != (getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE)) {
                WebView.setWebContentsDebuggingEnabled(true);
            }
            webSettings.setDomStorageEnabled(true);
        } else { // for sure
            throw new RuntimeException("Unsupported android version (needs KitKat and above)");
        }

        refreshBtn = (Button) findViewById(R.id.activity_main_refresh_btn);
        if (BuildConfig.webAppRefreshBtnEnabled) {
            refreshBtn.setVisibility(View.VISIBLE);
            refreshBtn.setOnLongClickListener(new RefreshButtonLongClickListener());
        }
    }

    @Override
    public void onBackPressed() {
        if(webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    class RefreshButtonLongClickListener implements View.OnLongClickListener {
        @Override
        public boolean onLongClick(View v) {
            if (webView != null) {
                webView.reload();
            }
            return true;
        }
    }
}
