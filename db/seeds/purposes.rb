purposes = {
  'Basketball' => ['nike-hyperfuse-basketball-shoe'],
  'Biking' => ['novara-padded-bike-boxers'],
  'Climbing' => ['five-ten-team-vxi'],
  'Cold Weather' => [
    'uniqlo-ultra-lite-down-vest',
    'uniqlo-extra-fine-merino-v-neck-sweater',
    'uniqlo-heattech-v-neck-t-shirt-long-sleeve',
    'uniqlo-heattech-long-john',
    # long socks
  ],
  'Expressive' => [
    'american-apparel-tri-blend-t-shirt',
    'xero-shoes-diy-sandal',
    'warrior-liverpool-kit',
    'uniqlo-novak-djokovic-polo',
  ],
  'Favorite' => [
    'marmot-rom-jacket',
    'icebreaker-tech-t-lite-short-sleeve',
    'exofficio-give-n-go-sport-brief',
    'xero-shoes-diy-sandal',
  ],
  'For Girlfriend' => [
    'wool-prince-better-button-down',
    'lems-nine2five',
    'american-apparel-tri-blend-t-shirt',
  ],
  'Formal' => [
    'wool-prince-better-button-down',
    'uniqlo-ultra-lite-down-vest',
    'uniqlo-extra-fine-merino-v-neck-sweater',
    'uniqlo-airism-boxer-brief',
    'injinji-run-2-0-lightweight-no-show-nuwool',
    'lems-nine2five',
  ],
  'Frisbee' => ['inov8-bare-grip-200'],
  'Hiking' => ['inov8-bare-grip-200'],
  'Lounging' => [
    'american-apparel-tri-blend-t-shirt',
    'uniqlo-extra-fine-merino-v-neck-sweater',
  ],
  'Tennis' => ['new-balance-696-tennis'],
}

purposes.each do |purpose_name, clothing_items|
  purpose = Purpose.create!(name: purpose_name)

  clothing_items.each do |clothing_item_id|
    purpose.clothing_items << ClothingItem.friendly.find(clothing_item_id)
  end
end
