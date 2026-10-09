<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep supermarket demo data in `src/lib/store-data.ts` and shared cart/auth UI state in `StoreProvider`; this keeps all customer and admin routes consistent while remaining API-replaceable.

- Apply the shared `mobile-menu-surface` class to navigation and portaled menu panels; plain CSS tokens keep their opaque surfaces independent of modern color functions.
