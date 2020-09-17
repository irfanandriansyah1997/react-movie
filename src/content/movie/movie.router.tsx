import { ReactNode, FunctionComponent } from 'react';

import PokemonListPage from './movie-list/movie-list.page';
import PokemonDetailPage from './movie-detail/movie-detail.page';
import { RoutingModulesInterface } from '../../shared/modules/routing/interface/routing-modules.interface';
import { RoutingModulesDecorator, RoutingSubModulesDecorator } from '../../shared/modules/routing/decorator/router.decorator';

/**
 * Pokemon Router
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.09.17
 */
@RoutingModulesDecorator('')
class PokemonRouter implements RoutingModulesInterface {
    render(): ReactNode {
        return null;
    }

    /**
     * Movie Detail Path
     * @return {FunctionComponent}
     */
    @RoutingSubModulesDecorator('/detail/:id')
    public movieDetailPath(): FunctionComponent {
        return PokemonDetailPage;
    }

    /**
     * Movie Search Path
     * @return {FunctionComponent}
     */
    @RoutingSubModulesDecorator('/')
    public movieListPage(): FunctionComponent {
        return PokemonListPage;
    }
}

export default PokemonRouter;