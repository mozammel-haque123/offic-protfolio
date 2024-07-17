Import { Resolve } From "Path";
Import { DefineConfig } From "Vite";

Export Default DefineConfig({
Build: {
RollupOptions: {
Input: {
Main: Resolve(__dirname, "index.Html"),
},
    },
  },
});

