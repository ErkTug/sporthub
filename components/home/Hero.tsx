import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 text-center">
      <h2 className="mb-6 text-5xl font-bold text-slate-900">
        Türkiye'nin Yeni Spor Platformu
      </h2>

      <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
        Haberler, canlı skorlar, ligler, takımlar ve spor dünyasındaki tüm
        gelişmeler tek bir platformda.
      </p>

      <Button size="lg">
        Keşfet
      </Button>
    </section>
  );
}