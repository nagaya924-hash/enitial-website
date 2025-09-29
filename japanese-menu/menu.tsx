import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Menu() {
  const menuData = {
    appetizers: [
      { name: "枝豆", description: "塩茹でした新鮮な枝豆", price: "¥480", isVegetarian: true },
      { name: "餃子（6個）", description: "手作り焼き餃子、特製タレ付き", price: "¥680", isPopular: true },
      { name: "唐揚げ", description: "ジューシーな鶏の唐揚げ", price: "¥780" },
      { name: "刺身盛り合わせ", description: "本日の新鮮な魚介類", price: "¥1,280", isPremium: true },
    ],
    mains: [
      { name: "ラーメン", description: "濃厚豚骨スープの醤油ラーメン", price: "¥980", isPopular: true },
      { name: "チャーハン", description: "パラパラに炒めた特製チャーハン", price: "¥880" },
      { name: "親子丼", description: "ふわふわ卵と鶏肉の丼", price: "¥1,080" },
      { name: "天ぷら定食", description: "海老と野菜の天ぷら、ご飯・味噌汁付き", price: "¥1,380", isPremium: true },
      { name: "寿司セット", description: "握り寿司8貫とお椀", price: "¥1,680", isPremium: true },
    ],
    desserts: [
      { name: "抹茶アイス", description: "濃厚な抹茶の風味", price: "¥480", isVegetarian: true },
      { name: "どら焼き", description: "ふわふわ生地にあんこ", price: "¥380", isVegetarian: true },
      { name: "チーズケーキ", description: "なめらかなベイクドチーズケーキ", price: "¥580", isVegetarian: true },
    ],
    drinks: [
      { name: "緑茶", description: "香り高い日本茶", price: "¥280", isVegetarian: true },
      { name: "コーヒー", description: "深煎りブレンド", price: "¥380", isVegetarian: true },
      { name: "生ビール", description: "キリン一番搾り", price: "¥580" },
      { name: "日本酒", description: "地酒各種", price: "¥680" },
      { name: "ソフトドリンク", description: "コーラ・オレンジ・ウーロン茶", price: "¥320", isVegetarian: true },
    ],
  }

  const MenuSection = ({ title, items, icon }: { title: string; items: any[]; icon: string }) => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <span className="text-2xl">{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <div className="flex gap-1">
                    {item.isPopular && (
                      <Badge variant="destructive" className="text-xs">
                        人気
                      </Badge>
                    )}
                    {item.isPremium && (
                      <Badge variant="secondary" className="text-xs">
                        おすすめ
                      </Badge>
                    )}
                    {item.isVegetarian && (
                      <Badge variant="outline" className="text-xs">
                        🌱
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <div className="ml-4">
                <span className="font-bold text-lg text-orange-600">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🍜 和食レストラン 桜</h1>
          <p className="text-gray-600">本格的な日本料理をお楽しみください</p>
          <Separator className="my-4" />
        </div>

        {/* Menu Sections */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <MenuSection title="前菜・おつまみ" items={menuData.appetizers} icon="🥢" />
            <MenuSection title="メイン料理" items={menuData.mains} icon="🍱" />
          </div>
          <div>
            <MenuSection title="デザート" items={menuData.desserts} icon="🍰" />
            <MenuSection title="お飲み物" items={menuData.drinks} icon="🍵" />
          </div>
        </div>

        {/* Footer */}
        <Card className="mt-8 bg-gray-50">
          <CardContent className="p-6">
            <div className="text-center space-y-2">
              <h3 className="font-semibold text-lg">営業時間</h3>
              <p className="text-gray-600">月〜金: 11:00 - 22:00</p>
              <p className="text-gray-600">土日祝: 10:00 - 23:00</p>
              <Separator className="my-3" />
              <p className="text-sm text-gray-500">
                🌱 = ベジタリアン対応 | アレルギーをお持ちの方はスタッフまでお声がけください
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
