(function() {
    var implementors = Object.fromEntries([["getrandom",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"getrandom/struct.Error.html\" title=\"struct getrandom::Error\">Error</a>"]]],["rand",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distr/enum.BernoulliError.html\" title=\"enum rand::distr::BernoulliError\">BernoulliError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distr/uniform/enum.Error.html\" title=\"enum rand::distr::uniform::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distr/weighted/enum.Error.html\" title=\"enum rand::distr::weighted::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"rand/distr/slice/struct.Empty.html\" title=\"struct rand::distr::slice::Empty\">Empty</a>"]]],["rand_core",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"rand_core/struct.OsError.html\" title=\"struct rand_core::OsError\">OsError</a>"]]],["zerocopy",[["impl&lt;A, S, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"zerocopy/error/enum.ConvertError.html\" title=\"enum zerocopy::error::ConvertError\">ConvertError</a>&lt;A, S, V&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div>"],["impl&lt;Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"zerocopy/error/struct.AlignmentError.html\" title=\"struct zerocopy::error::AlignmentError\">AlignmentError</a>&lt;Src, Dst&gt;<div class=\"where\">where\n    Src: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>,\n    Dst: <a class=\"trait\" href=\"zerocopy/trait.KnownLayout.html\" title=\"trait zerocopy::KnownLayout\">KnownLayout</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div>"],["impl&lt;Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"zerocopy/error/struct.SizeError.html\" title=\"struct zerocopy::error::SizeError\">SizeError</a>&lt;Src, Dst&gt;<div class=\"where\">where\n    Src: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>,\n    Dst: <a class=\"trait\" href=\"zerocopy/trait.KnownLayout.html\" title=\"trait zerocopy::KnownLayout\">KnownLayout</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div>"],["impl&lt;Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"zerocopy/error/struct.ValidityError.html\" title=\"struct zerocopy::error::ValidityError\">ValidityError</a>&lt;Src, Dst&gt;<div class=\"where\">where\n    Src: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>,\n    Dst: <a class=\"trait\" href=\"zerocopy/trait.KnownLayout.html\" title=\"trait zerocopy::KnownLayout\">KnownLayout</a> + <a class=\"trait\" href=\"zerocopy/trait.TryFromBytes.html\" title=\"trait zerocopy::TryFromBytes\">TryFromBytes</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[263,1073,270,3587]}