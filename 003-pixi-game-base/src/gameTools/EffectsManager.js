import { KNOWN_ASSETS } from "../assetManagement/knownAssets";
import { getAssetManager, getScreenSize } from "../globalGameAPI";
import { timer } from "../utils/utils";

export class EffectsManager {
  view = new PIXI.Container();
  spawnTimer;

  initialize() {
    this.spawnTimer = timer(this.mockupLighting, 1000, this);
  }
  mockupLighting() {
    const effect = getAssetManager().assetMap.get(KNOWN_ASSETS.LIGHTNING_BOLT)();

    this.view.addChild(effect);
  }
  update(delta) {
    this.spawnTimer.update(delta);
  }
}
